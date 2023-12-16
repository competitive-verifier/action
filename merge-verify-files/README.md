# Merge verify_files.json
Action for `verify_files.json` of `competitive-verifier`.

See [action.yml](action.yml) or [competitive-verifier/competitive-verifier](https://github.com/competitive-verifier/competitive-verifier).

## Example

```yml
      - name: Set up competitive-verifier
        uses: competitive-verifier/actions/setup@v2

      - name: Use glob
        id: glob
        uses: competitive-verifier/actions/merge-verify-files@v2
        with:
          verify-files: tests/file*.json
          output-path: merged-glob.json

      - name: Use list
        id: list
        uses: competitive-verifier/actions/merge-verify-files@v2
        with:
          verify-files: |
            tests/file1.json
            tests/file2.json
          output-path: merged-list.json

      - name: Use merged json
        run: |
          echo "${{ steps.glob.outputs.json-path }}"
```