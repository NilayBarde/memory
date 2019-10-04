defmodule Memory.Game do
  
    def client_view(game) do
      %{
        randomBoard: ["A","A","B","B","C","C","D","D","E","F","G","G","H","H"],
        clicked: [],
        visibleArray: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        countClicked: 0
      }
    end
  end
  