import { useQuery } from "@tanstack/react-query";
import Trailor  from "../entities/Trailor";
import APIClient from "../services/api-client";

const useTrailors = (gameId: number) => {
    const apiClient = new APIClient<Trailor>(`/games/${gameId}/movies`)
    return useQuery({
    queryKey: ['trailors', gameId],
    queryFn: apiClient.getAll
})}

export default useTrailors