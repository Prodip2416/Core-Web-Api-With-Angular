using demo_app_api.Data;
using demo_app_api.DTOs;
using demo_app_api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace demo_app_api.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _config;

        public AccountController(DataContext context)
        {
            this._config = context;
        }
        [HttpPost]
        public async Task<ActionResult<UserDto>> Login(User loginDto)
        {
            var user = await _config.Users.SingleOrDefaultAsync(x => x.UserName == loginDto.UserName);
            if (user == null) return Unauthorized("Invalid user.");

            if (user.Password.ToLower() == loginDto.Password.ToLower())
            {
                return new UserDto
                {
                    Username = user.UserName
                };
            }
            return Unauthorized("Invalid user password.");
        }
    }
}
