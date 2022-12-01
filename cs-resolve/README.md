# oj-resolve-action
Action for `competitive-verifier oj-resolve`.

See [action.yml](action.yml) or [competitive-verifier/csharp-resolver](https://github.com/competitive-verifier/csharp-resolver).

## Example

```yml
      - name: setup CompetitiveVerifierCsResolver
        run: dotnet tool install -g CompetitiveVerifierCsResolver
      - name: C# test
        run: |
          dotnet test {{YourUnittest.csproj}} --logger "CompetitiveVerifier;OutFile=${{runner.temp}}/unittest.csv"
          dotnet run --project {{YourProblemApp.csproj}} -c Release > ${{runner.temp}}/problems.json

      # include & exclude
      - name: cs-resolve
        uses: competitive-verifier/actions/cs-resolve@v1
        with:
          solution: YourSolution.sln
          output-path: ./verify.json
          include: |
            src
            others
          exclude: |
            src/resource
            others/tests
          unittest-result: ${{runner.temp}}/unittest.csv
          problems: ${{runner.temp}}/problems.json
```