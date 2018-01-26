class LRUCache

  attr_reader :cache_size

  def initialize(cache_size)
    @cache = Array.new(cache_size)
    @cache_size = cache_size
  end

  def count
    # returns number of elements currently in cache
    @cache.length
  end

  def add(el)
    # adds element to cache according to LRU principle
    @cache.delete(el)
    @cache.push(el)
    @cache.shift if @cache.length > @cache_size
  end

  def show
    @cache.dup
    # shows the items in the cache, with the LRU item first
  end

  private
  # helper methods go here!

end
