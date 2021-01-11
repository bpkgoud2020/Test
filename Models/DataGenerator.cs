using HannaApplicationProcess.December20.Web.DataContext;

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HannaApplicationProcess.December20.Web.Models
{
    public class DataGenerator
    {

        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new ApplicantDBContext(
                serviceProvider.GetRequiredService<DbContextOptions<ApplicantDBContext>>()))
            {
                // Look for any board games already in database.
                if (context.Applicants.Any())
                {
                    return;   // Database has been seeded
                }

                context.Applicants.AddRange(
                    new Applicant
                    {
                        id = 1,
                        name = "Thomas",
                        familyName = "Richard",
                        address = "Berlin",
                        countryOfOrigin = "Germany",
                        emailAddress = "tomas@yahoo.com",
                        age = 34,
                        hired = false
                    },
                    new Applicant
                    {
                        id = 2,
                        name = "Sachin",
                        familyName = "Tendulkar",
                        address = "Mumbai",
                        countryOfOrigin = "India",
                        emailAddress = "sachin@yahoo.com",
                        age = 47,
                        hired = false
                    },
                     new Applicant
                     {
                         id = 3,
                         name = "Bill",
                         familyName = "Gates",
                         address = "Redmond",
                         countryOfOrigin = "USA",
                         emailAddress = "bill.gates@yahoo.com",
                         age = 60,
                         hired = false
                     });

                context.SaveChanges();
            }
        }
    }
}
