import * as core from '@actions/core'
import * as fs from 'fs/promises'
import {parseFiles} from './parse'

async function run(): Promise<void> {
  try {
    const working_directory = core.getInput('working-directory', {
      trimWhitespace: true
    })
    if (working_directory) {
      process.chdir(working_directory)
    }

    const verify_files_path = core.getInput('verify-files', {required: true})
    core.info(`verify-files=${verify_files_path}`)
    const verify_files_json = await fs.readFile(verify_files_path, {
      encoding: 'utf-8'
    })
    const verify_files = JSON.parse(verify_files_json)
    core.info(`input json: ${verify_files_json}`)
    const updated = await parseFiles(verify_files)
    const updatedJsonStr = JSON.stringify(updated)
    core.info(`output json: ${updatedJsonStr}`)
    await fs.writeFile(verify_files_path, updatedJsonStr)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
