Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2,
           Rails.application.credentials.google[:client_id],
           Rails.application.credentials.google[:client_secret]
end

# GETでOAuth2は現在推奨されない（けど、とりあえず動くからこのまま）
# OmniAuth.config.allowed_request_methods = [:post, :get]