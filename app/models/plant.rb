class Plant
  # ===============================
  # SET UP
  # ===============================
  # connect to heroku postgres
    if(ENV['DATABASE_URL'])
      uri = URI.parse(ENV['DATABASE_URL'])
      DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    # else connect to localhost postgres
    else
      DB = PG.connect(host: "localhost", port: 5432, dbname: 'final_project_development')
    end

  # ===============================
  # PREPARED STATEMENTS
  # ===============================
  create post
  DB.prepare("create_plant",
    <<-SQL
      INSERT INTO plants (name, type, care)
      VALUES ($1, $2, $3)
      RETURNING id, name, type, care;
    SQL
  )

  # update post
  DB.prepare("update_plant",
    <<-SQL
      UPDATE posts
      SET name = $2, type = $3, care = $4
      WHERE id = $1
      RETURNING id, name, type, care;
    SQL
  )

  # ===============================
  # ROUTES
  # ===============================
  # index
  def self.all
    results = DB.exec("SELECT * FROM plants ORDER BY id ASC;")
    return results.map do |result|
      {
          "id" => result["id"].to_i,
          "name" => result["name"],
          "type" => result["type"],
          "care" => result["care"],
      }
    end
  end

  # show
  def self.find(id)
    results = DB.exec("SELECT * FROM plants WHERE id=#{id};")
    # if !results.num_tuples.zero?
      return {
        "id" => results.first["id"].to_i,
        "name" => results.first["name"],
        "type" => results.first["type"],
        "care" => results.first["care"]
      }
    # else
    #   return {
    #     "error" => "no such post, check the id!"
    #   }, status: 400
    # end
  end

  # create
  def self.create(opts)
    results = DB.exec_prepared("create_plant", [opts["name"], opts["type"], opts["care"]])
    return {
      "id" => results.first["id"].to_i,
      "name" => results.first["name"],
      "type" => results.first["type"],
      "care" => results.first["care"],
    }
  end

  # delete
  def self.delete(id)
    results = DB.exec("DELETE FROM plants WHERE id=#{id};")
    return { "deleted" => true }
  end

  # update
  def self.update(id, opts)
    results = DB.exec_prepared("update_candle", [id, opts["name"], opts["type"], opts["care"]])
    return {
      "id" => results.first["id"].to_i,
      "care" => results.first["care"],
      "name" => results.first["name"],
      "type" => results.first["type"]
    }
  end

end
