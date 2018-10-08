def new_session
  site = Dokkio.new("https://dokkio.com/")
  site.open
  site
end
