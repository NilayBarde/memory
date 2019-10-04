defmodule Memory.Game do
  def new do
    %{
      randomBoard: random_board(),
      clicked: [],
      visibleArray: [],
      countClicked: 0,
    }
  end

  def client_view(game) do
    %{
      randomBoard: game.randomBoard(),
      clicked: game.clicked,
      visibleArray: game.visibles,
      countClicked: game.countClicked,
    }
  end

    def random_board do
      board = ["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"]
      Enum.shuffle(board)
    end
  end
  