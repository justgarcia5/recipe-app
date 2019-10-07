class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :username, presence: true

  has_many :recipes, dependent: :destroy
  has_many :posts, dependent: :destroy
  has_one_attached :avatar

end
