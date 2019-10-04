defmodule Memory.Game do
  def new do 
    %{

    }
  end
  
    def client_view(game) do
      %{
        randomBoard: random_board(),
        clicked: [],
        visibleArray: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        countClicked: 0
      }
    end

    def random_board do
      board = ["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"]
      Enum.shuffle(board)
    end
  end
  