# Upload competitive-verifier verify_files.json artifact
A wrapper of actions/upload-artifact for verify_files.json of `competitive-verifier`.

See [action.yml](action.yml) or [competitive-verifier/competitive-verifier](https://github.com/competitive-verifier/competitive-verifier).

## Example

```yml
      - name: Set up competitive-verifier
        uses: competitive-verifier/actions/setup@v1
        with:
          python-version: "3.9"

      - name: Upload artifact
        uses: competitive-verifier/actions/upload-verify-artifact@v1
        with:
          file: verify_files.json
```