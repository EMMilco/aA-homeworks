require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef") }
  subject(:brownie) { Dessert.new("brownie", 50) }

  describe "#initialize" do
    it "sets a type" do
      expect(brownie.type).to eq('brownie')
    end

    it "sets a quantity" do
      expect(brownie.amount).to eq(50)
    end

    it "starts ingredients as an empty array" do
      expect(brownie.ingredients).to be_empty
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new("brownie", "tons") }.to raise_error(ArgumentError)
  end

  describe "#add_ingredient" do
    before(:each) { brownie.add_ingredient("eggs") }
    it "adds an ingredient to the ingredients array" do
      expect(brownie.ingredients).to include("eggs")
    end
  end

  describe "#mix!" do
    before(:each) { brownie.add_ingredient("eggs")}
    before(:each) { brownie.add_ingredient("butter")}
    before(:each) { brownie.add_ingredient("flour")}
    before(:each) { brownie.mix! }
    it "shuffles the ingredient array" do
      expect(brownie.ingredients).to not_eq(["eggs","butter","flour"])
  end

  describe "#eat" do
    before(:each) {}
    it "subtracts an amount from the quantity"


    it "raises an error if the amount is greater than the quantity"
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name"
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(:chef).to receive(:bake).with("brownie")
  end
end
