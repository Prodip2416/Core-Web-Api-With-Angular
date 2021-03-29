using demo_app_api.Models;
using demo_app_api.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace demo_app_api.Controllers
{
    public class PlayersController : BaseApiController
    {
        private readonly IPlayerService _playerService;

        public PlayersController(IPlayerService playerService)
        {
            _playerService = playerService;
        }
        [HttpGet]
        public async Task<IEnumerable<Player>> Get()
        {
            return await _playerService.GetAllPlayers();
        }
        [HttpGet("playersDetail/{name}")]
        public async Task<IEnumerable<PlayersDetails>> GetPlayerDetails(string name)
        {
            return await _playerService.GetAllPlayerDetails(name);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Player>> Get(int id)
        {
            var player = await _playerService.GetPlayerById(id);

            if (player == null)
            {
                return NotFound();
            }
            return Ok(player);
        }
        [HttpPost]
        public async Task<ActionResult<Player>> Post(Player player)
        {
            await _playerService.CreatePlayer(player);
            return CreatedAtAction("Post", new { id = player.Id }, player);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Player player)
        {
            if (id != player.Id)
            {
                return BadRequest("Not a valid player id");
            }

            await _playerService.UpdatePlayer(player);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id <= 0)
            {
                return BadRequest("Not a valid player id");
            }
            var player = await _playerService.GetPlayerById(id);
            if (player == null)
            {
                return NotFound();
            }

            await _playerService.DeletePlayer(player);
            return NoContent();
        }
    }
}
