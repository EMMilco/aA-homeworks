require 'rspec'
require 'lru_cache'

describe "LRUCache" do
  subject(:cache) { LRUCache.new(4) }

  describe "#initialize" do
    it "initializes the cache with an array of the given length" do
      expect(cache.count).to eq(4)
    end

    it "stores the max length of the cache" do
      expect(cache.cache_size).to eq(4)
    end

  end

  describe "#add" do
    it "adds a given element to the cache" do
      cache.add("bob")
      expect(cache.show).to include("bob")
    end

    it "does not add the element more than once" do
      cache.add("steve")
      cache.add("steve")
      cache.add("steve")
      cache.add("steve")
      expect(cache.show.select {|x| x == "steve"}.length).to be(1)
    end

    it "adds the newest element to the last position" do
      cache.add("terry")
      expect(cache.show.last).to eq("terry")
    end


    it "keeps the length of the cache under the assigned size limit" do
      cache.add("a")
      cache.add("ab")
      cache.add("abc")
      cache.add("abcd")
      cache.add("abcde")
      cache.add("abcdef")
      cache.add("abcdefg")
      cache.add("abcdefgh")
      cache.add("abcdefghi")
      expect(cache.count).to eq(4)
    end

  end

end
