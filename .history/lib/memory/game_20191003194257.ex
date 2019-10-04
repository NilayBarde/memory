defmodule Memory.Game do  
    def client_view(game) do
      %{
        randomBoard: this.boardGenerator(),
        clicked: [],
        visibleArray: new Array(16).fill(false),
        countClicked: 0,
      }
    end
  end
  