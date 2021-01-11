using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HannaApplicationProcess.December20.Web.DataContext
{
    public class ApplicantDBContext : DbContext
    {
        public ApplicantDBContext(DbContextOptions<ApplicantDBContext> options)
            : base(options)
        {
        }

        public DbSet<Models.Applicant> Applicants { get; set; }
    }
}
