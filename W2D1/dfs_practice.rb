children = []
value = []

def dfs(target)
  return self if self.value == target
  children.each do |child|
    subtree_result = child.dfs(target)
    return subtree_result if subtree_result
  end
  nil
end
