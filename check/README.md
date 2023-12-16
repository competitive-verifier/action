# Check competitive-verifier result
A composite action that check result of `competitive-verifier`.

See [action.yml](action.yml) or [competitive-verifier/competitive-verifier](https://github.com/competitive-verifier/competitive-verifier).


## Example

```yml
      - name: Check
        uses: competitive-verifier/actions/check@v2
        with:
          verify-result: result*/competitive-verifier-result.json
```