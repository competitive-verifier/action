import * as fs from 'fs/promises'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FilesValue = {document_attributes?: any; [key: string]: any}

async function readDoxygen(
  entry: [string, FilesValue]
): Promise<[string, FilesValue]> {
  const [path, vf] = entry
  const content = await fs.readFile(path, {encoding: 'utf-8'})
  const match = content.match(/@(title|brief) (.+)/)
  if (!match) return entry
  if (!vf.document_attributes) {
    vf.document_attributes = {}
  }
  vf.document_attributes.document_title = match.at(2)?.trim()
  return [path, vf]
}

export async function parseFiles(verify_files: {
  files: Record<string, FilesValue>
}): Promise<{files: Record<string, FilesValue>}> {
  const entries = await Promise.all(
    Object.entries(verify_files.files).map(readDoxygen)
  )
  return {files: Object.fromEntries(entries)}
}
