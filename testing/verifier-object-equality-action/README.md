# verifier-object-equality-action
Action for checking `competitive-verifier` object.

For testing.

## Example

```yml
name: Test

on:
  push:
    branches:
      - main
  pull_request:
  workflow_dispatch:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up competitive-verifier
        uses: competitive-verifier/actions/setup@v1
        with:
          python-version: "3.9"

      - name: equal
        uses: competitive-verifier/actions/verifier-object-equality-action@v1
        with:
          class: VerificationInput
          file1: file-foo.json
          file2: file-bar.json
      - name: not-equal
        uses: competitive-verifier/actions/verifier-object-equality-action@v1
        with:
          class: VerificationInput
          file1: file-foo.json
          file2: file-baz.json
          not: true
```