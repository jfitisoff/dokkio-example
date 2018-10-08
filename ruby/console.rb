#!/usr/bin/env ruby

require "pry"
require_relative "spec/spec_helper"

s = new_session
s.home_page

binding.pry
