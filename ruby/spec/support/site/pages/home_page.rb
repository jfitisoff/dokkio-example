class HomePage < Dokkio::Page
  div :jobs_panel, xpath: "//div[contains(@class, 'panel-grid') and contains(., 'Jobs')]" do
    span :qa_button, text: 'QA Engineer'
    span :eng_button, text: 'Senior Full Stack Engineer'
    div :qa_job, class: 'job-header', text: /Do you love high quality/
    div :eng_job, class: 'job-header', text: /Are you an awesome developer/
  end
end
