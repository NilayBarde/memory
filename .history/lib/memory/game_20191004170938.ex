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
      randomBoard: game.randomBoard,
      clicked: game.clicked,
      visibleArray: game.visibles,
      countClicked: game.countClicked,
    }
  end

    def random_board do
      board = [:1, "A"]
      Enum.shuffle(board)
    end
  end
  