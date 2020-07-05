# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.1'

gem 'bootsnap', '>= 1.4.2', require: false
gem "bundler", ">= 2.1.4"
gem "devise"
gem 'jbuilder', '~> 2.7'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '>=5.0.0.beta1'
gem 'rails', github: 'rails/rails'
gem "sorbet", group: :development
gem "sorbet-runtime"
gem "typhoeus"
gem 'webpacker', git: 'https://github.com/rails/webpacker.git'


# Reduces boot times through caching; required in config/boot.rb

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem "factory_bot_rails"
  gem "rspec-rails"
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.2'
  gem 'rubocop-rails', require: false
  gem "solargraph"
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem "faker"
  gem 'selenium-webdriver'
  gem 'webdrivers'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
