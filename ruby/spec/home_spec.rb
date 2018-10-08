require_relative "spec_helper"

describe "home page" do
  before(:all)  { @s = new_session }
  before(:each) { @s.home_page.visit }

  let(:s) { @s }

  it "displays the Senior Full Stack Engineer position by default" do
    expect(s.jobs_panel.eng_job).to be_present
  end

  it "displays the QA Engineer position when the QA Engineer button is clicked" do
    s.jobs_panel.qa_button.click
    expect(s.jobs_panel.qa_job.wait_until(&:present?)).to be_present
  end
end
