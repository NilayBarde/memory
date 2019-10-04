defmodule Memory.Game do
    def new do
      %{
        guesses: [],
      }
    end
  
    def client_view(game) do
      %{
        randomBoard: next_word,
        clicked: [],
        visibleArray: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
        countClicked: 0
      }
    end

    def next_word do
      board=["A","A","B","B","C","C","D","D","E","F","G","G","H","H"]
      Enum.shuffle(board)
    end
  end
  