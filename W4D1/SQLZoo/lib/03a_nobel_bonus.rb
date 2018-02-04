# == Schema Information
#
# Table name: nobels
#
#  yr          :integer
#  subject     :string
#  winner      :string

require_relative './sqlzoo.rb'

# BONUS PROBLEM: requires sub-queries or joins. Attempt this after completing
# sections 04 and 07.

def physics_no_chemistry
  # In which years was the Physics prize awarded, but no Chemistry prize?
  execute(<<-SQL)
    SELECT DISTINCT physics.yr
    FROM nobels as physics
    LEFT JOIN nobels as chemistry
    ON physics.yr = chemistry.yr
    AND chemistry.subject = 'Chemistry'
    WHERE physics.subject = 'Physics'
    AND chemistry.subject IS NULL

  SQL
end
