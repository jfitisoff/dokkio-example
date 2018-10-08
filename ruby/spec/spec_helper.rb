require_relative "support/site/site"

[
  "/support/site/components/*.rb",
  "/support/site/pages/*.rb",
  "/support/site/utils/*.rb"
].each do |pattern|
  Dir[File.expand_path(File.dirname(__FILE__)) + pattern].each do |path|
    require path
  end
end
