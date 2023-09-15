defmodule MyConcurrentModule do
    def asd do IO.puts "Hello World" end
    defp callAsd(0) do :ok end    
    defp callAsd(n) do
        asd()
        callAsd(n-1)
    end

    def start(n) do Task.start_link(fn->callAsd(n) end) end
end

defmodule Other do
    def asd do IO.puts "number" end

    defp callAsd(0) do :ok end    
    defp callAsd(n) do
        asd()
        callAsd(n-1)
    end

    def start(n) do Task.start_link(fn->callAsd(n) end) end
end


MyConcurrentModule.start(100)
Other.start(100)

