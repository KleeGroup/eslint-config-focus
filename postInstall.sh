DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
NODE_MODULES="$DIR/node_modules"
PARENT_NODE_MODULES="$DIR/../../node_modules"

# Check if module is included as a dependency
if [ -d "$PARENT_NODE_MODULES" ]; then
  # We are a dependency ! Let's copy
  rm -rf "$NODE_MODULES/babel-eslint"
  rm -rf "$NODE_MODULES/eslint"
  rm -rf "$NODE_MODULES/eslint-plugin-filenames"
  rm -rf "$NODE_MODULES/eslint-plugin-react"
  rm -rf "$NODE_MODULES/eslint-plugin-require-jsdoc"
  cp -r "$NODE_MODULES/babel-eslint" "$PARENT_NODE_MODULES/babel-eslint"
  cp -r "$NODE_MODULES/eslint" "$PARENT_NODE_MODULES/eslint"
  cp -r "$NODE_MODULES/eslint-plugin-filenames" "$PARENT_NODE_MODULES/eslint-plugin-filenames"
  cp -r "$NODE_MODULES/eslint-plugin-react" "$PARENT_NODE_MODULES/eslint-plugin-react"
  cp -r "$NODE_MODULES/eslint-plugin-require-jsdoc" "$PARENT_NODE_MODULES/eslint-plugin-require-jsdoc"
  cp -f "$NODE_MODULES/.bin/eslint" "$PARENT_NODE_MODULES/.bin/"
  cp -f "$NODE_MODULES/.bin/eslint.cmd" "$PARENT_NODE_MODULES/.bin/"
fi
