DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
NODE_MODULES="$DIR/node_modules"
PARENT_NODE_MODULES="$DIR/../../node_modules"

# Check if module is included as a dependency
if [ -d "$PARENT_NODE_MODULES" ]; then
  # We are a dependency ! Let's copy
  PARENT = "$PARENT_NODE_MODULES/.."
  cd "$PARENT"
  npm install --save eslint babel-eslint eslint-plugin-react eslint-plugin-filenames eslint-plugin-require-jsdoc
fi
