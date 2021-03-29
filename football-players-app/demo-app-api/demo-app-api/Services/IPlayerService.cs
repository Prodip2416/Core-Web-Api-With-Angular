using demo_app_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace demo_app_api.Services
{
    public interface IPlayerService
    {
        Task<IEnumerable<Player>> GetAllPlayers();
        Task<IEnumerable<PlayersDetails>> GetAllPlayerDetails(string name);
        Task<Player> GetPlayerById(int id);
        Task<Player> CreatePlayer(Player player);
        Task UpdatePlayer(Player player);
        Task DeletePlayer(Player player);
    }
}
