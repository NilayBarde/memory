defmodule Memory.Game do  
    def client_view(game) do
      ws = String.graphemes(game.word)
      gs = game.guesses
      %{
        randomBoard: skeleton(ws, gs),
        clicked: Enum.filter(gs, &(Enum.member?(ws, &1))),
        visibleArray: Enum.filter(gs, &(!Enum.member?(ws, &1))),
        countClicked: max_guesses(),
      }
    end
  end
  