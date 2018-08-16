class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.string :title
      t.string :backdrop_path
      t.integer :moviedb_id
      t.text :overview
      t.integer :popularity
      t.string :post_path
      t.string :release_date

      t.timestamps
    end
  end
end
