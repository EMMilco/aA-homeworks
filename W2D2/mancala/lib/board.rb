class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @player1 = name1
    @player2 = name2
    @cups = Array.new(14) { Array.new(4) { :stone } }
    @cups[6] = []
    @cups[13] = []
    @current_player = @player1
  end

  def place_stones

  end

  def valid_move?(start_pos)
    raise 'Invalid starting cup' unless start_pos.between?(1,14)
  end

  def make_move(start_pos, current_player_name)
    i = 1
    until @cups[start_pos].empty?
      current = (start_pos + i) % 14
      if current_player_name == @player1
        @cups[current] << cups[start_pos].pop unless current == 13
      else
        @cups[current] << cups[start_pos].pop unless current == 6
      end
      i += 1
    end
    render
    next_turn(current)
  end

  def next_turn(ending_cup_idx)
    if ending_cup_idx == 6 || ending_cup_idx == 13
      :prompt
    elsif @cups[ending_cup_idx].length == 1
      :switch
    else
      ending_cup_idx
    end


  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    [@cups[0..5], @cups[7..12]].any? { |side| side.flatten.compact.empty? }
  end

  def winner
    [@player1, :draw, @player2][(@cups[13].length <=> @cups[6].length) + 1]
  end
end
