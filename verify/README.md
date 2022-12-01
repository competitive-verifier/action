# cache-problems
Action for `competitive-verifier verify`.

See [action.yml](action.yml) or [competitive-verifier/competitive-verifier](https://github.com/competitive-verifier/competitive-verifier).


## Example

```yml
      - name: Set up competitive-verifier
        uses: competitive-verifier/actions/setup@v1
        with:
          python-version: "3.9"

      # Create verify_files.json
      # ...

      - name: Set up competitive-verifier
        uses: competitive-verifier/actions/verify@v1
        with:
          verify-files: verify_files.json
          destination: ${{runner.temp}}/result.json
```