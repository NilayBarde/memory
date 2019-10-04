defmodule Memory.Game do
  
    def client_view(game) do
      %{
        randomBoard: ["A","A","B","B","C","C","D","D","E","F","G","G","H","H"],
        clicked: [],
        visibleArray: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        countClicked: 0
      }
    end

    def random_board do
      words = ~w(
        horse snake jazz violin
        muffin cookie pizza sandwich
        house train clock
        parsnip marshmallow
      )
      Enum.random(words)
    end
  
  end
  