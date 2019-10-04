defmodule Memory.Game do  
    def client_view(game) do
      %{
        randomBoard: skeleton(ws, gs),
        clicked: [],
        visibleArray: Enum.filter(gs, &(!Enum.member?(ws, &1))),
        countClicked: 0,
      }
    end
  end
  