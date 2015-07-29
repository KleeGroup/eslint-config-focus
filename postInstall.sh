DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
NODE_MODULES="$DIR/node_modules"
PARENT_NODE_MODULES="$DIR/../../node_modules"
# Check if module is included as a dependency
if [ -d "$PARENT_NODE_MODULES" ]; then
  # We are a dependency ! Let's symbolic link
  ln -s "$NODE_MODULES/babel-eslint" "$PARENT_NODE_MODULES/babel-eslint"
  ln -s "$NODE_MODULES/eslint" "$PARENT_NODE_MODULES/eslint"
  ln -s "$NODE_MODULES/eslint-plugin-filenames" "$PARENT_NODE_MODULES/eslint-plugin-filenames"
  ln -s "$NODE_MODULES/eslint-plugin-react" "$PARENT_NODE_MODULES/eslint-plugin-react"
  ln -s "$NODE_MODULES/eslint-plugin-require-jsdoc" "$PARENT_NODE_MODULES/eslint-plugin-require-jsdoc"
fi
