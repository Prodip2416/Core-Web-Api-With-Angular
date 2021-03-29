using demo_app_api.Data;
using demo_app_api.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace demo_app_api.Services
{
    public class PlayerService : IPlayerService
    {
        private readonly DataContext _context;

        public PlayerService(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Player>> GetAllPlayers()
        {
            return await _context.Players
                .Include(x => x.Position)
                .ToListAsync();
        }

        public async Task<Player> GetPlayerById(int id)
        {
            return await _context.Players
                .Include(x => x.Position)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Player> CreatePlayer(Player player)
        {
            _context.Players.Add(player);
            await _context.SaveChangesAsync();
            return player;
        }
        public async Task UpdatePlayer(Player player)
        {
            _context.Players.Update(player);
            await _context.SaveChangesAsync();
        }

        public async Task DeletePlayer(Player player)
        {
            _context.Players.Remove(player);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<PlayersDetails>> GetAllPlayerDetails(string name)
        {
            var playerName = new SqlParameter("@Name", name);
            return await _context.PlayersDetails.FromSqlRaw("exec getPlayersDetails @Name", playerName).ToListAsync();
        }
    }
}
