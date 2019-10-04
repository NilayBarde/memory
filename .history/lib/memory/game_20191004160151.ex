defmodule Memory.Game do
  def new do
    %{
      randomBoard: [],
      clicked: [],
      visibleArray: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      countClicked: 0
    }
  end

    def client_view(game) do
      %{
        clicked: game.
        visibleArray: game.visibles,
        countClicked: game.countClicked,
      }
    end

    def random_board do
      board = ["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"]
      Enum.shuffle(board)
    end
  end
  