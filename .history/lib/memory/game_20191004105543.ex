defmodule Memory.Game do
    def new do
      %{
        word: next_word(),
        guesses: [],
      }
    end
  
    def client_view(game) do
      ws = String.graphemes(game.word)
      gs = game.guesses
      %{
        randomBoard: skeleton(ws, gs),
        clicked: Enum.filter(gs, &(Enum.member?(ws, &1))),
        visibleArray: Enum.filter(gs, &(!Enum.member?(ws, &1))),
        max: max_guesses(),
      }
    end
  
    def skeleton(word, guesses) do
      Enum.map word, fn cc ->
        if Enum.member?(guesses, cc) do
          cc
        else
          "_"
        end
      end
    end
  
    def guess(game, letter) do
      if letter == "z" do
        raise "That's not a real letter"
      end
  
      gs = game.guesses
      |> MapSet.new()
      |> MapSet.put(letter)
      |> MapSet.to_list
  
      Map.put(game, :guesses, gs)
    end
    
    def next_word do
      words = ~w(
        horse snake jazz violin
        muffin cookie pizza sandwich
        house train clock
        parsnip marshmallow
      )
      Enum.random(words)
    end
  end
  