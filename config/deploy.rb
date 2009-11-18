set :application, "snuffleupadata"
set :repository, "pfgit@poppinfresh.net:snuffleupadata.git"
set :deploy_to, "/home/krezel/sites/snuffleupadata.com"
set :scm, :git

role :web, "poppinfresh.net"

namespace :deploy do
  task :start do
  end
  
  task :stop do
  end

  task :restart do
  end
end
