module ApplicationHelper
  def auth_token
    html = <<-HERE.html_safe
      <input
        type="hidden"
        name="authenticity_token"
        value="#{form_authenticity_token}"
      />
    HERE
    html
  end
end
