require 'test_helper'

class ApiControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # endr
  describe "True" do
    it "should be true" do
      true.should be_true
    end
  end
end
