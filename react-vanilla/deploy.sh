npm run build
pushd build
  touch Staticfile
  cf push -f ../manifest.yml
popd