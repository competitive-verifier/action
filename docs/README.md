# cache-problems
Action for `competitive-verifier docs`.

See [action.yml](action.yml) or [competitive-verifier/competitive-verifier](https://github.com/competitive-verifier/competitive-verifier).


## Example

```yml
      - name: Create docs
        uses: competitive-verifier/actions/docs@v1
        with:
          verify-files: verify-files.json
          verify-result: result*/competitive-verifier-result.json
          destination: ${{runner.temp}}/_jekyll
          write-summary: true
```