import {parseFiles} from '../src/parse'
import * as process from 'process'
import * as path from 'path'
import {expect, test} from '@jest/globals'

test('parse', async () => {
  process.chdir(path.dirname(path.dirname(__dirname)))
  const result = await parseFiles({
    files: {
      'parse-doxygen/__tests__/code/aplusb.cpp': {
        verification: [
          {
            type: 'const',
            status: 'success'
          }
        ]
      },
      'parse-doxygen/__tests__/code/hello.cpp': {
        document_attributes: {}
      }
    }
  })

  expect(result).toEqual({
    files: {
      'parse-doxygen/__tests__/code/aplusb.cpp': {
        verification: [
          {
            type: 'const',
            status: 'success'
          }
        ],
        document_attributes: {
          document_title: '$A + B$'
        }
      },
      'parse-doxygen/__tests__/code/hello.cpp': {
        document_attributes: {
          document_title: 'Hello World!'
        }
      }
    }
  })
})
